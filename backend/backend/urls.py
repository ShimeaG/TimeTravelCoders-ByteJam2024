from django.contrib import admin
from django.urls import include, path
from . import routers

urlpatterns = [
    path('api/', include((routers.router.urls, 'core_api'), namespace='core_api')),
    path("history/", include("historyFacts.urls")),
    path("admin/", admin.site.urls),
]