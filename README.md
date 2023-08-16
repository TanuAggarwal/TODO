# TODO
TODO using Nodejs Express.
# REST API 
 
API to perform CRUD Operations.

## Install Packages

    npm install

## Run the app

    npm start

# REST API

    The REST API

## Get TODO Data

### Request
    `GET /getData`
        curl --location 'http://localhost:3000/api/getData'

### Response

    HTTP 200 OK
    Date: Wed, 16 Aug 2023 08:26:12 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json
    Content-Length: 225

        [
            {
                "id": 1,
                "title": "test",
                "description": "testing save api",
                "completed": 0
            },
            {
                "id": 3,
                "title": "test1",
                "description": "testing save api1",
                "completed": 0
            },
            {
                "id": 5,
                "title": "testUpdate1",
                "description": "testing update api",
                "completed": 1
            }
        ]

## Get TODO Data By ID
### Request
    `GET /getDataById/:id`
        curl --location 'http://localhost:3000/api/getDataById/1'

### Response
    HTTP 200 OK
    Date: Wed, 16 Aug 2023 08:26:12 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json
    Content-Length: 70
    {
        "id": 1,
        "title": "test",
        "description": "testing save api",
        "completed": 0
    }

## POST TODO Data 

### Request
    `POST /postData`
        curl --location 'http://localhost:3000/api/postData' \
        --header 'Content-Type: application/json' \
        --data '{
            "title": "test2",
            "description": "testing save api2"
        }'

### Response
    HTTP 201 CREATED
    Date: Wed, 16 Aug 2023 08:26:12 GMT
    Status: 201 CREATED
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 8
    {
        "id": 6
    }

## PATCH TODO Data

### Request
    `PATCH /updateData/:id`
        curl --location --request PATCH 'http://localhost:3000/api/updateData/5' \
        --header 'Content-Type: application/json' \
        --data '{
            "title": "testUpdate1",
            "description": "testing update api",
            "completed": 1
        }'

### Response

    HTTP 200 OK
    Date: Wed, 16 Aug 2023 08:26:12 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 38
    {
        "message": "Data Updated Sucessfully"
    }

## DELETE TODO Data

### Request
    `DELETE /deleteDataById/:id`
        curl --location --request DELETE 'http://localhost:3000/api/deleteDataById/6' 

### Response
    HTTP 200 OK
    Date: Wed, 16 Aug 2023 08:26:12 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 38
    {
        "message": "Data Deleted Sucessfully"
    }


