from rest_framework import routers
# from history.viewsets import YearsViewSet, EventsViewSet
from .history.viewsets import YearsViewSet, EventsViewSet

router = routers.SimpleRouter()
router.register(r'years', YearsViewSet, basename="years")
router.register(r'events', EventsViewSet, basename="events")

urlpatterns = router.urls