import axios from "axios";
import { useEffect } from "react";

export default function CheckByVin() {
  useEffect(() => {
    // axios({
    //   url: "http://api.autoxp.ru/api/vinident.aspx",
    //   data: { vin: "JF2GTAAC4KH359426" },
    //   method: "get",
    // }).then((res) => console.log({ res }));
  }, []);

  return (
    <div className="flex flex-col">
      Enter vin...
      <input className="border border-red-500" />
    </div>
  );
}
