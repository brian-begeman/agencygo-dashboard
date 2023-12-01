// import { allPayrollsWithTimestampMock } from "./payrollTablaData";
const fs = require('fs');
// Your data
const data = [
    {
        "_id": "656913e1be72eb185dc0e97b",
        "employeeId": "6568f22ee48341c5d3b05733",
        "hourlyPay": "23.46",
        "commissionEarned": "36",
        "bonus": "191.97",
        "status": false,
        "totalHours": "7.35",
        "totalPayment": 400.451,
        "createdAt": "2023-11-24T15:07:53.773294+00:00",
        "__v": 0
    },
    {
        "_id": "656913e1be72eb185dc0e97c",
        "employeeId": "6568f22ee48341c5d3b05733",
        "hourlyPay": "23.46",
        "commissionEarned": "103",
        "bonus": "112.89",
        "status": false,
        "totalHours": "25.79",
        "totalPayment": 821.1034000000001,
        "__v": 0,
        "createdAt": "2023-11-03T22:20:04.516786+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e97d",
        "employeeId": "6568f22ee48341c5d3b05733",
        "hourlyPay": "23.46",
        "commissionEarned": "267",
        "bonus": "529.22",
        "status": true,
        "totalHours": "23.52",
        "totalPayment": 1347.9292,
        "__v": 0,
        "createdAt": "2023-10-18T17:52:21.603450+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e97e",
        "employeeId": "6568f22ee48341c5d3b05733",
        "hourlyPay": "23.46",
        "commissionEarned": "91",
        "bonus": "423.47",
        "status": false,
        "totalHours": "34.36",
        "totalPayment": 1320.5156000000002,
        "__v": 0,
        "createdAt": "2023-11-24T06:13:02.612453+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e97f",
        "employeeId": "6568f22ee48341c5d3b05733",
        "hourlyPay": "23.46",
        "commissionEarned": "240",
        "bonus": "129.52",
        "status": true,
        "totalHours": "36.74",
        "totalPayment": 1231.6004,
        "__v": 0,
        "createdAt": "2023-11-15T16:46:07.613697+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e980",
        "employeeId": "6568f22ee48341c5d3b05733",
        "hourlyPay": "23.46",
        "commissionEarned": "251",
        "bonus": "361.31",
        "status": true,
        "totalHours": "20.90",
        "totalPayment": 1102.594,
        "__v": 0,
        "createdAt": "2023-10-25T20:53:07.424835+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e981",
        "employeeId": "6568f22ee48341c5d3b05733",
        "hourlyPay": "23.46",
        "commissionEarned": "156",
        "bonus": "331.44",
        "status": false,
        "totalHours": "2.34",
        "totalPayment": 542.6764000000001,
        "__v": 0,
        "createdAt": "2023-11-09T10:53:12.840313+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e982",
        "employeeId": "6568f22ee48341c5d3b05733",
        "hourlyPay": "23.46",
        "commissionEarned": "288",
        "bonus": "687.12",
        "status": false,
        "totalHours": "2.60",
        "totalPayment": 1036.286,
        "__v": 0,
        "createdAt": "2023-11-15T11:49:57.791472+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e983",
        "employeeId": "6568f22ee48341c5d3b05733",
        "hourlyPay": "23.46",
        "commissionEarned": "30",
        "bonus": "541.39",
        "status": true,
        "totalHours": "6.44",
        "totalPayment": 722.7324,
        "__v": 0,
        "createdAt": "2023-10-17T10:00:13.612539+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e984",
        "employeeId": "6568f22ee48341c5d3b05733",
        "hourlyPay": "23.46",
        "commissionEarned": "240",
        "bonus": "201.28",
        "status": false,
        "totalHours": "20.69",
        "totalPayment": 926.1774,
        "__v": 0,
        "createdAt": "2023-11-09T19:45:14.756923+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e986",
        "employeeId": "6568ff12d5f09e73d4b3952a",
        "hourlyPay": "18.50",
        "commissionEarned": "214",
        "bonus": "353.68",
        "status": false,
        "totalHours": "7.96",
        "totalPayment": 714.98,
        "__v": 0,
        "createdAt": "2023-11-10T13:19:17.224437+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e987",
        "employeeId": "6568ff12d5f09e73d4b3952a",
        "hourlyPay": "18.50",
        "commissionEarned": "133",
        "bonus": "100.09",
        "status": true,
        "totalHours": "38.97",
        "totalPayment": 954.515,
        "__v": 0,
        "createdAt": "2023-10-20T20:28:55.093526+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e988",
        "employeeId": "6568ff12d5f09e73d4b3952a",
        "hourlyPay": "18.50",
        "commissionEarned": "292",
        "bonus": "711.45",
        "status": false,
        "totalHours": "8.63",
        "totalPayment": 1163.515,
        "__v": 0,
        "createdAt": "2023-11-25T00:20:23.375379+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e989",
        "employeeId": "6568ff12d5f09e73d4b3952a",
        "hourlyPay": "18.50",
        "commissionEarned": "221",
        "bonus": "525.31",
        "status": false,
        "totalHours": "22.58",
        "totalPayment": 1164.25,
        "__v": 0,
        "createdAt": "2023-11-16T20:01:26.790041+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e98a",
        "employeeId": "6568ff12d5f09e73d4b3952a",
        "hourlyPay": "18.50",
        "commissionEarned": "296",
        "bonus": "876.08",
        "status": false,
        "totalHours": "1.06",
        "totalPayment": 1191.69,
        "__v": 0,
        "createdAt": "2023-11-18T02:07:05.512681+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e98b",
        "employeeId": "6568ff12d5f09e73d4b3952a",
        "hourlyPay": "18.50",
        "commissionEarned": "105",
        "bonus": "60.37",
        "status": true,
        "totalHours": "1.37",
        "totalPayment": 190.66500000000002,
        "__v": 0,
        "createdAt": "2023-11-23T15:52:47.383203+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e98c",
        "employeeId": "6568ff12d5f09e73d4b3952a",
        "hourlyPay": "18.50",
        "commissionEarned": "145",
        "bonus": "65.89",
        "status": true,
        "totalHours": "29.05",
        "totalPayment": 748.1550000000001,
        "__v": 0,
        "createdAt": "2023-10-31T15:37:48.077014+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e98d",
        "employeeId": "6568ff12d5f09e73d4b3952a",
        "hourlyPay": "18.50",
        "commissionEarned": "272",
        "bonus": "630.31",
        "status": true,
        "totalHours": "22.05",
        "totalPayment": 1310.3249999999998,
        "__v": 0,
        "createdAt": "2023-11-30T11:34:58.049813+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e98e",
        "employeeId": "6568ff12d5f09e73d4b3952a",
        "hourlyPay": "18.50",
        "commissionEarned": "128",
        "bonus": "33.48",
        "status": false,
        "totalHours": "10.57",
        "totalPayment": 357.375,
        "__v": 0,
        "createdAt": "2023-11-20T06:06:05.579899+00:00"
    },
    {
        "_id": "656913e1be72eb185dc0e98f",
        "employeeId": "6568ff12d5f09e73d4b3952a",
        "hourlyPay": "18.50",
        "commissionEarned": "23",
        "bonus": "664.15",
        "status": false,
        "totalHours": "0.39",
        "totalPayment": 693.885,
        "__v": 0,
        "createdAt": "2023-11-27T07:46:18.322334+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e991",
        "employeeId": "6568ff27d5f09e73d4b3953d",
        "hourlyPay": "1.22",
        "commissionEarned": "67",
        "bonus": "734.87",
        "status": true,
        "totalHours": "32.71",
        "totalPayment": 841.9062,
        "__v": 0,
        "createdAt": "2023-11-02T05:45:10.604270+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e992",
        "employeeId": "6568ff27d5f09e73d4b3953d",
        "hourlyPay": "1.22",
        "commissionEarned": "94",
        "bonus": "300.97",
        "status": true,
        "totalHours": "28.40",
        "totalPayment": 429.678,
        "__v": 0,
        "createdAt": "2023-11-30T09:56:29.173998+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e993",
        "employeeId": "6568ff27d5f09e73d4b3953d",
        "hourlyPay": "1.22",
        "commissionEarned": "204",
        "bonus": "432.26",
        "status": true,
        "totalHours": "18.79",
        "totalPayment": 659.4938,
        "__v": 0,
        "createdAt": "2023-11-29T18:15:45.781376+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e994",
        "employeeId": "6568ff27d5f09e73d4b3953d",
        "hourlyPay": "1.22",
        "commissionEarned": "57",
        "bonus": "673.04",
        "status": true,
        "totalHours": "28.52",
        "totalPayment": 764.5444,
        "__v": 0,
        "createdAt": "2023-11-13T04:43:54.525304+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e995",
        "employeeId": "6568ff27d5f09e73d4b3953d",
        "hourlyPay": "1.22",
        "commissionEarned": "110",
        "bonus": "928.00",
        "status": false,
        "totalHours": "13.61",
        "totalPayment": 1054.4942,
        "__v": 0,
        "createdAt": "2023-11-25T23:11:11.699287+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e996",
        "employeeId": "6568ff27d5f09e73d4b3953d",
        "hourlyPay": "1.22",
        "commissionEarned": "172",
        "bonus": "966.69",
        "status": false,
        "totalHours": "39.02",
        "totalPayment": 1185.9844,
        "__v": 0,
        "createdAt": "2023-11-21T02:49:02.726738+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e997",
        "employeeId": "6568ff27d5f09e73d4b3953d",
        "hourlyPay": "1.22",
        "commissionEarned": "122",
        "bonus": "672.76",
        "status": true,
        "totalHours": "15.14",
        "totalPayment": 813.2008,
        "__v": 0,
        "createdAt": "2023-11-15T22:28:14.093152+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e998",
        "employeeId": "6568ff27d5f09e73d4b3953d",
        "hourlyPay": "1.22",
        "commissionEarned": "78",
        "bonus": "549.57",
        "status": true,
        "totalHours": "24.88",
        "totalPayment": 657.6136,
        "__v": 0,
        "createdAt": "2023-11-12T20:15:29.835548+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e999",
        "employeeId": "6568ff27d5f09e73d4b3953d",
        "hourlyPay": "1.22",
        "commissionEarned": "45",
        "bonus": "558.12",
        "status": true,
        "totalHours": "25.64",
        "totalPayment": 634.3108,
        "__v": 0,
        "createdAt": "2023-11-24T13:47:22.143961+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e99a",
        "employeeId": "6568ff27d5f09e73d4b3953d",
        "hourlyPay": "1.22",
        "commissionEarned": "86",
        "bonus": "441.37",
        "status": false,
        "totalHours": "20.56",
        "totalPayment": 552.5132,
        "__v": 0,
        "createdAt": "2023-11-02T11:00:19.035459+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e99c",
        "employeeId": "656900d9b7bbe2e4e778c645",
        "hourlyPay": "20.07",
        "commissionEarned": "102",
        "bonus": "784.82",
        "status": false,
        "totalHours": "17.17",
        "totalPayment": 1231.2819000000002,
        "__v": 0,
        "createdAt": "2023-10-25T13:36:03.848579+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e99d",
        "employeeId": "656900d9b7bbe2e4e778c645",
        "hourlyPay": "20.07",
        "commissionEarned": "35",
        "bonus": "204.13",
        "status": true,
        "totalHours": "2.66",
        "totalPayment": 292.2462,
        "__v": 0,
        "createdAt": "2023-11-09T00:57:55.972410+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e99e",
        "employeeId": "6565afe2e026afbb9f4f1f43",
        "hourlyPay": "20.07",
        "commissionEarned": "194",
        "bonus": "853.23",
        "status": true,
        "totalHours": "4.91",
        "totalPayment": 1146.2037,
        "__v": 0,
        "createdAt": "2023-11-13T18:20:24.054320+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e99f",
        "employeeId": "6565afe2e026afbb9f4f1f43",
        "hourlyPay": "20.07",
        "commissionEarned": "110",
        "bonus": "173.30",
        "status": true,
        "totalHours": "32.02",
        "totalPayment": 926.1114,
        "__v": 0,
        "createdAt": "2023-10-31T05:30:14.459881+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e9a0",
        "employeeId": "6565afe2e026afbb9f4f1f43",
        "hourlyPay": "20.07",
        "commissionEarned": "207",
        "bonus": "932.74",
        "status": false,
        "totalHours": "3.67",
        "totalPayment": 1213.6269,
        "__v": 0,
        "createdAt": "2023-11-02T11:05:04.401236+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e9a1",
        "employeeId": "6565afe2e026afbb9f4f1f43",
        "hourlyPay": "20.07",
        "commissionEarned": "111",
        "bonus": "245.08",
        "status": false,
        "totalHours": "37.90",
        "totalPayment": 1116.863,
        "__v": 0,
        "createdAt": "2023-10-19T09:50:44.492678+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e9a2",
        "employeeId": "656900d9b7bbe2e4e778c645",
        "hourlyPay": "20.07",
        "commissionEarned": "246",
        "bonus": "827.98",
        "status": true,
        "totalHours": "28.82",
        "totalPayment": 1652.0674,
        "__v": 0,
        "createdAt": "2023-11-19T07:28:31.043190+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e9a3",
        "employeeId": "656900d9b7bbe2e4e778c645",
        "hourlyPay": "20.07",
        "commissionEarned": "117",
        "bonus": "827.51",
        "status": false,
        "totalHours": "29.44",
        "totalPayment": 1535.1808,
        "__v": 0,
        "createdAt": "2023-10-20T14:14:18.187833+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e9a4",
        "employeeId": "656900d9b7bbe2e4e778c645",
        "hourlyPay": "20.07",
        "commissionEarned": "101",
        "bonus": "47.67",
        "status": false,
        "totalHours": "12.68",
        "totalPayment": 403.1176,
        "__v": 0,
        "createdAt": "2023-11-11T22:25:14.904700+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e9a5",
        "employeeId": "656900d9b7bbe2e4e778c645",
        "hourlyPay": "20.07",
        "commissionEarned": "113",
        "bonus": "747.49",
        "status": true,
        "totalHours": "37.73",
        "totalPayment": 1617.2311,
        "__v": 0,
        "createdAt": "2023-11-09T00:43:16.254435+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e9a7",
        "employeeId": "65690149b7bbe2e4e778c67d",
        "hourlyPay": "18.89",
        "commissionEarned": "26",
        "bonus": "591.79",
        "status": false,
        "totalHours": "25.25",
        "totalPayment": 1094.5425,
        "__v": 0,
        "createdAt": "2023-10-20T06:13:11.071035+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e9a8",
        "employeeId": "65690149b7bbe2e4e778c67d",
        "hourlyPay": "18.89",
        "commissionEarned": "224",
        "bonus": "182.17",
        "status": false,
        "totalHours": "25.31",
        "totalPayment": 883.7859,
        "__v": 0,
        "createdAt": "2023-11-09T01:36:30.362241+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e9a9",
        "employeeId": "65690149b7bbe2e4e778c67d",
        "hourlyPay": "18.89",
        "commissionEarned": "203",
        "bonus": "551.67",
        "status": false,
        "totalHours": "2.11",
        "totalPayment": 794.9779,
        "__v": 0,
        "createdAt": "2023-10-22T01:48:45.935629+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e9aa",
        "employeeId": "65690149b7bbe2e4e778c67d",
        "hourlyPay": "18.89",
        "commissionEarned": "204",
        "bonus": "562.51",
        "status": true,
        "totalHours": "24.23",
        "totalPayment": 1224.5747000000001,
        "__v": 0,
        "createdAt": "2023-10-17T16:16:31.021558+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e9ab",
        "employeeId": "656506dad5fc642e80a11a10",
        "hourlyPay": "18.89",
        "commissionEarned": "221",
        "bonus": "38.87",
        "status": false,
        "totalHours": "33.55",
        "totalPayment": 893.9895,
        "__v": 0,
        "createdAt": "2023-11-20T07:24:22.707469+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e9ac",
        "employeeId": "656506dad5fc642e80a11a10",
        "hourlyPay": "18.89",
        "commissionEarned": "188",
        "bonus": "124.50",
        "status": true,
        "totalHours": "1.85",
        "totalPayment": 347.1365,
        "__v": 0,
        "createdAt": "2023-11-24T13:47:22.143961+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e9ad",
        "employeeId": "656506dad5fc642e80a11a10",
        "hourlyPay": "18.89",
        "commissionEarned": "85",
        "bonus": "384.29",
        "status": true,
        "totalHours": "38.77",
        "totalPayment": 1201.8153,
        "__v": 0,
        "createdAt": "2023-11-02T05:45:10.604270+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e9ae",
        "employeeId": "656506dad5fc642e80a11a10",
        "hourlyPay": "18.89",
        "commissionEarned": "200",
        "bonus": "279.71",
        "status": false,
        "totalHours": "3.36",
        "totalPayment": 543.5704,
        "__v": 0,
        "createdAt": "2023-11-10T13:19:17.224437+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e9af",
        "employeeId": "656506dad5fc642e80a11a10",
        "hourlyPay": "18.89",
        "commissionEarned": "92",
        "bonus": "384.28",
        "status": false,
        "totalHours": "9.82",
        "totalPayment": 661.3897999999999,
        "__v": 0,
        "createdAt": "2023-11-09T10:53:12.840313+00:00"
    },
    {
        "_id": "656913e2be72eb185dc0e9b0",
        "employeeId": "656506dad5fc642e80a11a10",
        "hourlyPay": "18.89",
        "commissionEarned": "248",
        "bonus": "258.70",
        "status": true,
        "totalHours": "17.27",
        "totalPayment": 833.0302999999999,
        "__v": 0,
        "createdAt": "2023-10-20T14:14:18.187833+00:00"
    }
];

function getStartDate(date, interval) {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0); // Reset time

    switch (interval) {
        case 'Weekly':
            newDate.setDate(newDate.getDate() - newDate.getDay());
            break;
        case 'Biweekly':
            const biweeklyOffset = newDate.getDate() % 14;
            newDate.setDate(newDate.getDate() - biweeklyOffset);
            break;
        case 'Monthly':
            newDate.setDate(1);
            break;
        case 'Annually':
            newDate.setMonth(0, 1);
            break;
    }

    return newDate;
}

function groupData(data, interval) {
    const groups = {};

    data.forEach(item => {
        const createdAt = new Date(item.createdAt);
        const groupStart = getStartDate(createdAt, interval).toISOString();

        if (!groups[groupStart]) {
            groups[groupStart] = {
                startDate: createdAt.toISOString(),
                endDate: createdAt.toISOString(),
                totalHours: 0,
                totalBonus: 0,
                totalCommissionEarned: 0,
                totalPayment: 0,
                data: []
            };
        }

        groups[groupStart].data.push(item);

        groups[groupStart].totalHours += parseFloat(item.totalHours);
        groups[groupStart].totalBonus += parseFloat(item.bonus);
        groups[groupStart].totalCommissionEarned += parseFloat(item.commissionEarned);
        groups[groupStart].totalPayment += item.totalPayment;

        if (new Date(groups[groupStart].startDate) > createdAt) {
            groups[groupStart].startDate = createdAt.toISOString();
        }

        if (new Date(groups[groupStart].endDate) < createdAt) {
            groups[groupStart].endDate = createdAt.toISOString();
        }
    });

    return groups;
}

// Example usage
const weeklyGroups = groupData(data, 'Weekly');
const biweeklyGroups = groupData(data, 'Biweekly');
const monthlyGroups = groupData(data, 'Monthly');
const annualGroups = groupData(data, 'Annually');

// Output to console or file
console.log('Weekly:', weeklyGroups);
console.log('Biweekly:', biweeklyGroups);
console.log('Monthly:', monthlyGroups);
console.log('Annually:', annualGroups);

// Optionally, you can write this output to a file
// fs.writeFileSync('groupedData.json', JSON.stringify({
//     weekly: weeklyGroups,
//     biweekly: biweeklyGroups,
//     monthly: monthlyGroups,
//     annually: annualGroups
// }, null, 4));
