from django.http import JsonResponse


students = [
    {"id": 1, "name": "Shiva", "department": "ECE"},
    {"id": 2, "name": "Harsha", "department": "CSE"},
    {"id": 3, "name": "Akash", "department": "Mechanical"},
    {"id": 4, "name": "Rahul", "department": "CSE"},
    {"id": 5, "name": "Priya", "department": "ECE"},
]


def get_students(request):

    if request.method == "GET":
        return JsonResponse(students, safe=False)

    return JsonResponse(
        {"error": "Method not allowed"},
        status=405
    )