import React from "react";

export default function ErrorScreen(error: any) {
  return (
    <div>
      <p>Error: {error.message}</p>
    </div>
  );
}
