from rest_framework import routers

from historyFacts.viewsets import YearsViewSet
from historyFacts.viewsets import EventsViewSet

router = routers.SimpleRouter()
router.register(r'historyFacts', YearsViewSet, basename="years")

router = routers.SimpleRouter()
router.register(r'historyFacts', EventsViewSet, basename="events")

urlpatterns = router.urls
