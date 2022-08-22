from django.shortcuts import render

# Create your views here.
def welcome(request):
    return render(request,'welcome.html')


def new(request):
    return render(request, 'new.html')
def anwr(request):
    return render(request,'anwer.html')
def next(request):
    return render(request,'next.html')
def grid(request):
    return render(request,'grid.html')
def javascript(request):
    return render(request,'javascript.html')
def function1(request):
    return render(request,'function.html')
def dom1(request):
    return render(request,'dom.html')