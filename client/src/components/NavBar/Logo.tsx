import logo from "../../assets/logo-no-background.png"

export default function Logo() {
  return (
    <div style={{ display: "flex" }}>
      <img src={logo} style={{width: "4vw"}} alt="logo" />
    </div>
  );
}
