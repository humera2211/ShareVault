import { SendEmail } from "@/app/_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import { Copy } from "lucide-react";
import { useState } from "react";

const FileShareForm = ({ file, onPasswordSave }) => {
  const [password, setPassword] = useState("");
  const [enablePassword,setEnablePassword]=useState(false);
  const [email,setEmail]=useState("");
  const {user}=useUser();

  const sendEmail = () => {
     if (!email) {
       alert("Please enter an email address");
       return;
     }
    const data = {
      emailToSend: email,
      userName:user?.fullName,
      fileName: file.fileName,
      fileSize: file.fileSize,
      fileType: file.fileType,
      shortUrl: file.shortUrl,
      fileUrl:file.fileUrl 
    };


    SendEmail(data)
      .then((resp) => {
        console.log(resp);
        alert("Email sent successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to send email");
      });
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(file.shortUrl);
      alert("Short URL copied to clipboard!");
    } catch (error) {
      console.error(error);
      alert("Failed to copy URL");
    }
  };

  return (
    <div className="space-y-7">
      <div>
        <label className="font-semibold">Short Url</label>

        <div className="relative mt-2">
          <input
            readOnly
            value={file.shortUrl}
            className="border rounded-xl  w-full py-3 px-4 pr-14"
          />

          <button
            onClick={copyToClipboard}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <Copy size={22} className="hover:text-gray-700" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={enablePassword}
            onChange={(e) => {
              setEnablePassword(e.target.checked);
              if (!e.target.checked) {
                setPassword("");
              }
            }}
          />
          Enable Password?
        </label>

        {enablePassword && (
          <div className="flex mt-3 gap-3">
            <input
              type="password"
              placeholder="Password"
              className="border rounded-xl flex-1 p-3"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={() => onPasswordSave(password)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl transition"
            >
              Save
            </button>
          </div>
        )}
      </div>

      <div>
        <label>Send File to Email</label>

        <input
          type="email"
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-lg w-full p-3 mt-2"
        />

        <button
          onClick={sendEmail}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl py-3 mt-4"
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default FileShareForm;
