import { useEffect, useState } from "react";

export function useEditableSection<T>(initialData: T) {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState<T>(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  function startEditing() {
    setIsEditing(true);
  }

  function cancelEditing() {
    setData(initialData);
    setIsEditing(false);
  }

  async function saveEditing(onSave: (data: T) => Promise<void>) {
    await onSave(data);
    setIsEditing(false);
  }

  return { isEditing, data, setData, startEditing, cancelEditing, saveEditing };
}
