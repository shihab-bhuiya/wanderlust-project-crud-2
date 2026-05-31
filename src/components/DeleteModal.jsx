'use client';

import { AlertDialog, Button } from "@heroui/react";
import { BiTrash } from "react-icons/bi";
import { useRouter } from "next/navigation";

export function DeleteModal({ result }) {
  const { _id } = result;
  const router = useRouter();

  const handleDelete = async () => {  
    try {
      const res = await fetch(`http://localhost:5000/destination/${_id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      // redirect after delete
      router.replace("/destinations");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AlertDialog>
      <Button variant="danger-soft" className="rounded-xl">
        <BiTrash /> Delete
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently delete this travel destination and all related data.
                This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                slot="close"
                variant="danger"
              >
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}