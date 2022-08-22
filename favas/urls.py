from django.urls import path
from .import views
urlpatterns=[
    path('',views.welcome,name='welcome'),
    path('new',views.new,name='new'),
    path('anwer',views.anwr,name='anwer'),
     path('next',views.next,name='next'),
     path('grid',views.grid,name='grid'),
     path('scrpt',views.javascript,name='script'),
     path('fun',views.function1,name='function'),
     path('dom',views.dom1,name='dom'),
]