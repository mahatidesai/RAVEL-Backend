from django.http import JsonResponse

def getRoutes(request):
    routes=[
        {
            'Name': "Mahati",
            'age': 19,
            'Address': "Vasai"
        },
        {
            'Name': "Arushi",
            'age': 20,
            'Address': "Vile Parle"
        },
        {
            'Name': "Aditi",
            'age': 19,
            'Address': "Goregaon"
        }
    ]
    return JsonResponse(routes, safe=False)
