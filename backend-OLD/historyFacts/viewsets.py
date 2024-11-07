from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from backend.historyFacts.models import Years
from backend.historyFacts.models import Events

from backend.historyFacts.serializers import EventsSerializer, YearsSerializer


class YearsViewSet(viewsets.ModelViewSet):
    queryset = Years.objects.all()
    serializer_class = YearsSerializer
    permission_classes = [AllowAny]


class EventsViewSet(viewsets.ModelViewSet):
    queryset = Events.objects.all()
    serializer_class = EventsSerializer
    permission_classes = [AllowAny]