from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Years, Events

from serializers import EventsSerializer, YearsSerializer


class YearsViewSet(viewsets.ModelViewSet):
    queryset = Years.objects.all()
    serializer_class = YearsSerializer
    permission_classes = [AllowAny]


class EventsViewSet(viewsets.ModelViewSet):
    queryset = Events.objects.all()
    serializer_class = EventsSerializer
    permission_classes = [AllowAny]