/* ============================================================
   DUNGEON TEMPLATE – Discord Preview Upload
   Style: Image upload with preview, displays Discord screenshot
   ============================================================ */

import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";

export default function DiscordPreview() {
  const [preview, setPreview] = useState<string | null>("/assets/discord-preview.webp");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClear = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div
      className="rounded-sm overflow-hidden"
      style={{
        border: "1px solid rgba(57, 255, 20, 0.15)",
        background: "#1e1f22",
        boxShadow: "0 0 40px rgba(57, 255, 20, 0.06)",
        minHeight: "280px",
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      {preview ? (
        <>
          {/* Preview */}
          <div className="relative" style={{ maxHeight: "100vh" }}>
            <img
              src={preview}
              alt="Discord preview"
              className="w-full h-auto"
              style={{
                display: "block",
                objectFit: "cover",
                objectPosition: "center",
                maxHeight: "100%",
              }}
            />
          </div>
        </>
      ) : (
        /* Upload prompt */
        <div
          className="flex flex-col items-center justify-center p-8 cursor-pointer transition-all"
          onClick={() => fileInputRef.current?.click()}
          style={{
            minHeight: "280px",
            background: "#2b2d31",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(57, 255, 20, 0.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#2b2d31";
          }}
        >
          <Upload size={32} style={{ color: "#39ff14", marginBottom: "1rem" }} />
          <p
            className="text-sm font-semibold mb-1"
            style={{ color: "#f0f0f0", fontFamily: "'DM Sans', sans-serif" }}
          >
            Upload Your Discord Screenshot
          </p>
          <p
            className="text-xs"
            style={{ color: "#666", fontFamily: "'DM Sans', sans-serif" }}
          >
            PNG, JPG, or WebP (max 5MB)
          </p>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
}
