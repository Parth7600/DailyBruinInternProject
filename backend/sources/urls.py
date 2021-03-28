from . import views
from django.urls import path, include

urlpatterns = [
    path('test', views.helloWorld),
    path('AllSources/create', views.create_source),
    path('AllSources/<int:id>', views.get_source),
    path('AllSources/update/<int:id>', views.update_source),
    path('AllSources/delete/<int:id>', views.delete_source),
    path('AllSources', views.all_sources),
    ]