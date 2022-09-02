import React from 'react'
export const productColumns = [
    { field: "id", headerName: "ID", width: 70},
    {
        field:"chassis" , headerName:"Chassis No." ,width:170,
    },
    {
        field:"car",
        headerName:"Car", 
        width:140, 
        renderCell: (params) => {
            return (
                <div className="cellwithImg">
                    <img className="cellImg" src={params.row.img} alt='avatar' />
                    {params.row.car}
                </div>
            )
        }
    },
    {
        field:"manufacturer" , headerName:"Manufacturer" ,width:140,
    },
    {
        field:"model" , headerName:"Model" ,width:100,
    },
    
    {
        field:"mileage" , headerName:"Mileage" ,width:100,
    },
    {
        field:"dimension" , headerName:"Dimensions" ,width:120,
    },
    {
        field:"price" , headerName:"Price" ,width:100,
    },
    {
        field:"purchase_date" , headerName:"Purchase Date" ,width:170,
    },
    {
        field:"status" , headerName:"Status" ,width:100,
        renderCell: (params) => {
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
    
    
]

//temporary data
export const productRows = [
    {
        id: 101,
        car: "City",
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg",
        model: 2020,
        chassis: "112233",
        manufacturer: "Honda",
        mileage: "800000",
        dimension: "800000",
        price: "80000.00",
        status: "Active",
        purchase_date: "01/03/21",

    },
    {
        id: 102,
        car: "Swift",
        model: 2013,
        img: "https://www.india.com/wp-content/uploads/2016/12/2017-Suzuki-Swift-white-front-three-quarters-1.jpg",
        purchase_date: "01/03/21",
        chassis: "112244",
        status: "Sold",
        manufacturer: "Suzuki",
        mileage: "800000",
        dimension: "800000",
        price: "80000.00",
    },
    {
        id: 103,
        car: "Mark X",
        model: 2013,
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/2876/original/Toyota_Mark_X_1st_Gen_(2004-2009).jpg",
        purchase_date: "01/03/21",
        chassis: "223344",
        status: "Active",
        manufacturer: "Toyota",
        mileage: "800000",
        dimension: "800000",
        price: "80000.00",
    },
    {
        id: 104,
        car: "Vezel",
        model: 2021,
        img: "https://i.pinimg.com/564x/9a/ce/d0/9aced0492e60a274e23ffd3e70cc9557.jpg",
        purchase_date: "01/03/21",
        chassis: "122338",
        status: "Sold",
        manufacturer: "Honda",
        mileage: "800000",
        dimension: "800000",
        price: "80000.00",
    },
    {
        id: 105,
        car: "Cultus",
        model: 2022,
        img: "http://www.suzukirawal.com/media/620x485/cultus/big1.jpg",
        purchase_date: "01/03/21",
        chassis: "223311",
        status: "Active",
        manufacturer: "Suzuki",
        mileage: "800000",
        dimension: "800000",
        price: "80000.00",
    },
    {
        id: 106,
        car: "Vitz",
        model: 2022,
        img: "https://www.solutionguider.com/wp-content/uploads/2022/02/Toyota-Vitz-F-1.3-2022-Price-in-Pakistan.jpg",
        purchase_date: "01/03/21",
        chassis: "223399",
        status: "Active",
        manufacturer: "Toyota",
        mileage: "800000",
        dimension: "800000",
        price: "80000.00",
    },
    {
        id: 107,
        car: "GLI ALTIS",
        model: 2020,
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg",
        purchase_date: "01/03/21",
        chassis: "283311",
        status: "Sold",
        manufacturer: "Toyota",
        mileage: "800000",
        dimension: "800000",
        price: "80000.00",
    },
    {
        id: 108,
        car: "Vitz",
        model: 2022,
        img: "https://www.solutionguider.com/wp-content/uploads/2022/02/Toyota-Vitz-F-1.3-2022-Price-in-Pakistan.jpg",
        purchase_date: "01/03/21",
        chassis: "277311",
        status: "Sold",
        manufacturer: "Toyota",
        mileage: "800000",
        dimension: "800000",
        price: "80000.00",
    },
    {
        id: 109,
        car: "Swift",
        model: 2019,
        img: "https://www.india.com/wp-content/uploads/2016/12/2017-Suzuki-Swift-white-front-three-quarters-1.jpg",
        purchase_date: "01/03/21",
        chassis: "783311",
        status: "Sold",
        manufacturer: "Suzuki",
        mileage: "800000",
        dimension: "800000",
        price: "80000.00",
    },
    {
        id: 110,
        car: "GLI",
        model: 2020,
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg",
        purchase_date: "01/03/21",
        chassis: "2266119",
        status: "Active",
        manufacturer: "Toyota",
        mileage: "800000",
        dimension: "800000",
        price: "80000.00",
    }
];