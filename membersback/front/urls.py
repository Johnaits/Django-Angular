from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from core.views import MemberViewSet


router = routers.DefaultRouter()
router.register('members', MemberViewSet)


urlpatterns = [
    
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    
]
