// Design database for Zen class programme

// 1. Create to Users Collection.

db.users.insertMany([
    {
        'batchId':'We34Batch',
        'userId': 1,
        'name': 'name_1',
        'email': 'name_1@gmail.com',
        'Contact_no': '9999999999'
    },
    {
        'batchId':'We34Batch',
        'userId': 2,
        'name': 'name_2',
        'email': 'name_2@gmail.com',
        'Contact_no': '8888888888'
    },
    {
        'batchId':'We34Batch',
        'userId': 3,
        'name': 'name_3',
        'email': 'name_3@gmail.com',
        'Contact_no': '7777777777'
    },
    {
        'batchId':'We34Batch',
        'userId': 4,
        'name': 'name_4',
        'email': 'name_4@gmail.com',
        'Contact_no': '6666666666'
    },
]);

// 2. Create to codekata collection.

db.codekata.insertMany([
    {
        'userId': 1,
        'problemsSolved': 60,
        'rank': 200,
        'geekscoins': 3000
    },
    {
        'userId': 2,
        'problemsSolved': 70,
        'rank': 190,
        'geekscoins': 4000
    },
    {
        'userId': 3,
        'problemsSolved': 80,
        'rank': 180,
        'geekscoins': 4500
    },
    {
        'userId': 4,
        'problemsSolved': 100,
        'rank': 170,
        'geekscoins': 5000
    },
]);

// 3. Create to attendence collection.

db.attendance.insertMany([
    {
        'userId': 1,
        'date': new Date("2022-12-01"),
        'status': 'absent'
    },
    {
        'userId': 2,
        'date': new Date("2022-12-01"),
        'status': 'present'
    },
    {
        'userId': 3,
        'date': new Date("2022-12-01"),
        'status': 'absent'
    },
    {
        'userId': 4,
        'date': new Date("2022-12-01"),
        'status': 'present'
    },
]);

// 4. Create to topics collection.

db.topics.insertMany([
    {
        'topic_id': 1,
        'topic_name': 'Javascript-functions',
        'tasks': ["arrow", "callback", "Anonymous"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_id': 2,
        'topic_name': 'Javascript-variables',
        'tasks': ["var", "let", "const"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_id': 3,
        'topic_name': 'Javascript-events',
        'tasks': ["event-bubbling", "event-listeners"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_id': 4,
        'topic_name': 'mysql',
        'tasks': ["create-table", "update-table", "delete-table"],
        'date': new Date("2020-10-15"),
    },
    {
        'topic_id': 5,
        'topic_name': 'mongoDB',
        'tasks': ["create_DB", "create_collections"],
        'date': new Date("2020-10-15"),
    }
]);

// 5. Create to task collection.

db.tasks.insertMany([
    {
        'user_id': 1,
        'task_name': 'Web Application',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-11-16")
    },
    {
        'user_id': 2,
        'task_name': 'Web Application',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-10-16")
    },
    {
        'user_id': 3,
        'task_name': 'Web Application',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-11-16")
    },
    {
        'user_id': 4,
        'task_name': 'Web Application',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-11-16")
    },
    {
        'user_id': 5,
        'task_name': 'Web Application',
        'date': new Date("2020-10-15"),
        'submission_date': new Date("2020-11-16")
    },
]);

// 6. Create to company drives collection.

db.company_drives.insertMany([
    {
        'drive_id': 1,
        'drive_name': 'google',
        'user_ids': [1, 2, 3],
        'date': new Date("2020-10-15")
    },
    {
        'drive_id': 2,
        'drive_name': 'hotstar',
        'user_ids': [1, 2],
        'date': new Date("2020-10-15")
    },
    {
        'drive_id': 3,
        'drive_name': 'microsoft',
        'user_ids': [3, 4],
        'date': new Date("2020-10-15")
    },
    {
        'drive_id': 4,
        'drive_name': 'amazon',
        'user_ids': [1, 2, 3, 4],
        'date': new Date("2020-11-15")
    },
    {
        'drive_id': 5,
        'drive_name': 'Flipkart',
        'user_ids': [1, 2, 3],
        'date': new Date("2020-10-15")
    },
]);

// 7. Create to mentors collection.

db.mentors.insertMany([
    {
        'mentor_id': 1,
        'mentee_id': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    },
    {
        'mentor_id': 2,
        'mentee_id': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    {
        'mentor_id': 3,
        'mentee_id': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    },
    {
        'mentor_id': 4,
        'mentee_id': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        'mentor_id': 5,
        'mentee_id': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    },
]);

// 1.Find all the topics and tasks which are thought in the month of October

db.topics.aggregate([
    {
        $project :{
            'topic_name': 1,
            'date': '$date',
            'month' : {
                $month: '$date'
            },
            'year': {
                $year: '$date'
            },
            
        }
    },
    {
        $match:{
            'month': 10,
            'year': 2020
        }
    },
    {
        $project:{
            'topic_name': 1,
            'date': 1
        }
    }
    
]).pretty()

db.tasks.aggregate([
    {
        $project :{
            'task_name': 1,
            'date': '$date',
            'month' : {
                $month: '$date'
            },
            'year': {
                $year: '$date'
            },
            
        }
    },
    {
        $match:{
            'month': 10,
            'year': 2020
        }
    },
    {
        $project:{
            'task_name': 1,
            'date': 1
        }
    }
    
]).pretty()

// 2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.company_drives.aggregate([
    {
       $project:{
           'drive_name': '$drive_name',
           'date': 1,
           'day': { $dayOfMonth : '$date'},
           'month': {$month : '$date'},
           'year': {$year: '$date'}
       }
    },
    {
        $match: {
            'year':{
                $eq : 2020
            },
            'month':{
                $eq : 10
            },
            'day': {
                $gte: 15,
                $lte:31
            }
        }
    },
    {
        $project: {
            'drive_name': 1,
            'date': 1
        }
    }

]).pretty()

// 3. Find all the company drives and students who are appeared for the placement.

db.company_drives.aggregate([
    {
        $lookup: {
            from: 'users',
            localField: 'user_ids',
            foreignField: 'userId',
            as: 'res'
        }
    }
]).pretty()

// 4. Find the number of problems solved by the user in codekata

db.codekata.aggregate([
    {
        $lookup:{
            from: 'users',
            localField: 'userId',
            foreignField: 'userId',
            as: 'user_details'
        }
    },
    {
        $project: { 
            'name' : '$user_details.name',
            'problems_solved': '$problemsSolved'
        }
    }
]).pretty()

// 5. Find all the mentors with who has the mentee's count more than 15

db.mentors.aggregate([
    {
        $lookup: {
            from: 'users',
            localField: 'mentor_id',
            foreignField: 'userId',
            as: 'mentor_details'
        }
    },
    {
        $project: {
            'mentor_name': '$mentor_details.name',
            'mentees_count': {
                $size: '$mentee_id'
            }
        }
    },
    {
        $match: {
            'mentees_count': {
                $gte: 15
            }
        }
    }
]).pretty()

