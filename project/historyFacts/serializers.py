from rest_framework import serializers

from project.historyFacts.models import Years
from project.historyFacts.models import Events


class YearsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Years
        fields = ['year_id', 'event_id']


class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = ['event_id', 'year_id', 'event_title', 'event_desc', 'event_image_url']
