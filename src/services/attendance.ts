import fetchReq from 'utils/fetch';

// Create Attendance
async function createAttendance(payload: any) {
  try {
    const endPoint = 'attendence/create';
    const options = {
      method: 'POST' as 'POST',
      headers: {
        'content-type': 'application/json',
      },
      withAuth: true,
      body: JSON.stringify(payload),
    };
    let response = await fetchReq(endPoint, options);
    return response.json();
  } catch (error: any) {
    throw new Error(error?.message);
  }
}

// Update Attendance
async function updateAttendance(payload: any, attId: String) {
  const endPoint = `attendence/update/empAttendance/${attId}`;
  const options = {
    method: 'PUT' as 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    withAuth: true,
    body: JSON.stringify(payload),
  };
  let responce = await fetchReq(endPoint, options);
  let resp = await responce.json();
  return resp;
}

// Get Emp Attendance
async function getEmpAttendance(empID: any) {
  const endPoint = 'attendence/getAttandanceByEmpId/' + empID;
  const options = {
    method: 'GET',
    withAuth: true,
  };
  let responce = await fetchReq(endPoint, options);
  let resp = await responce.json();
  return resp;
}

export { createAttendance, updateAttendance, getEmpAttendance };
