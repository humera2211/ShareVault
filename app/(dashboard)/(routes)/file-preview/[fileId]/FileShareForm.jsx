import { SendEmail } from "@/app/_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import { Copy } from "lucide-react";
import { useState } from "react";

const FileShareForm = ({ file, onPasswordSave }) => {
  const [password, setPassword] = useState("");
  const [enablePassword, setEnablePassword] = useState(false);
  const [email, setEmail] = useState("");
  const { user } = useUser();

  const sendEmail = () => {
    if (!email) {
      alert("Please enter an email address");
      return;
    }
    const data = {
      emailToSend: email,
      userName: user?.fullName,
      fileName: file.fileName,
      fileSize: file.fileSize,
      fileType: file.fileType,
      shortUrl: file.shortUrl,
      fileUrl: file.fileUrl,
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
            className="border rounded-xl text-black w-full py-3 px-4 pr-14"
          />

          <button
            onClick={copyToClipboard}
            className="absolute text-black right-4 top-1/2 -translate-y-1/2"
          >
            <Copy size={22} className="hover:text-gray-700" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <label className="flex gap-2 text-black  items-center">
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
              className="border rounded-xl text-black flex-1 p-3"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={() => {
                onPasswordSave(password);
                alert("password saved");
              }}
              className="bg-[#C9A227] hover:bg-yellow-500 text-black px-6 rounded-xl transition"
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
          className="border rounded-lg text-black w-full p-3 mt-2"
        />

        <button
          onClick={sendEmail}
          className="w-full bg-[#C9A227] hover:bg-yellow-500 transition text-black rounded-xl py-3 mt-4"
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default FileShareForm;
