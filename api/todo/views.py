from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TaskSerializer
from .models import Task




from .models import Task
@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List': '/task-list/',
        'Detail view': '/task-detail/<str:pk>/',
        'Create': '/task-create/',
        'Update': '/task-update/<str:pk>/',
        'Delete': '/task-delete/<str:pk>/',
        
    }
    return Response(api_urls)
        

@api_view(['GET'])
def taskList(request):
    queryset = Task.objects.all().order_by( 'complete', '-create')
    serializer_class = TaskSerializer(queryset, many=True)
    return Response(serializer_class.data)

@api_view(['GET'])
def taskDetail(request, pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerializer(task, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def taskCreate(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['PUT'])
def taskUpdate(request, pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerializer(instance=task, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def taskDelete(request, pk):
    task = Task.objects.get(id=pk)
    task.delete()
    return Response("Item successufully deleted !")


    

    