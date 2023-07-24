import Button from "@mui/material/Button";

export default function LogoutPage() {
 
const token =localStorage.getItem("Access_token");


  function logUserOut() {
    localStorage.removeItem("Access_token");
    localStorage.removeItem("userId"); 
    window.location.reload();
  }

  if (token) {
    return <Button onClick={logUserOut}> press here to logout</Button>;
  } else {
    return <div>you have been loged out</div>;
  }
}
