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
    let responce = await fetchReq(endPoint, options);
    return responce;
  } catch (error: any) {
    throw new Error(error?.message);
  }
}

// Update Attendance
async function updateAttendance(data: any) {
  const endPoint = 'employee/' + data.id;
  const options = {
    method: 'PUT' as 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    withAuth: true,
    body: JSON.stringify(data),
  };
  let responce = await fetchReq(endPoint, options);
  let resp = await responce.json();
  return resp;
}

// Get Emp Attendance
async function getEmpAttendance(data: any) {
  const endPoint = 'employee/' + data.id;
  const options = {
    method: 'GET',
    withAuth: true,
    body: JSON.stringify(data),
  };
  let responce = await fetchReq(endPoint, options);
  let resp = await responce.json();
  return resp;
}

export { createAttendance, updateAttendance, getEmpAttendance };
