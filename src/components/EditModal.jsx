"use client";

import { MdEmail } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

import {
  Button,
  Select,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";

export function EditModal({result}) {

  const onHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    console.log(destination);

    // Example API Call
    const res = await fetch(`http://localhost:5000/destination/${result._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(destination),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <Modal>
      
      {/* Trigger Button */}
      <Modal.Trigger>
        <Button
          variant="outline"
          className="rounded-xl flex items-center gap-2"
        >
          <BiEdit size={18} />
          Edit
        </Button>
      </Modal.Trigger>

      {/* Modal Content */}
      <Modal.Backdrop>
        <Modal.Container placement="center">

          <Modal.Dialog className="w-full max-w-3xl rounded-3xl">

            {/* Close Button */}
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header>
              <Modal.Icon className="bg-cyan-100 text-cyan-600">
                <MdEmail size={22} />
              </Modal.Icon>

              <Modal.Heading className="text-2xl font-bold">
                Edit Destination
              </Modal.Heading>

              <p className="text-sm text-gray-500 mt-2">
                Update your travel destination information.
              </p>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-6">

              <Surface
                variant="default"
                className="rounded-3xl border"
              >

                <form
                  onSubmit={onHandler}
                  className="p-6 md:p-10 space-y-8"
                >

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Destination Name */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={result.destinationName}

                        name="destinationName"
                        isRequired
                      >
                        <Label>Destination Name</Label>

                        <Input
                          placeholder="Destination name"
                          className="rounded-2xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <TextField
                    defaultValue={result.country}
                      name="country"
                      isRequired
                    >
                      <Label>Country</Label>

                      <Input
                        placeholder="Indonesia"
                        className="rounded-2xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* Category */}
                    <div>
                      <Select
                      defaultValue={result.category}
                        name="category"
                        isRequired
                        placeholder="Select Category"
                        className="w-full"
                      >

                        <Label>Category</Label>

                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>

                            <ListBox.Item id="Beach">
                              Beach
                            </ListBox.Item>

                            <ListBox.Item id="Mountain">
                              Mountain
                            </ListBox.Item>

                            <ListBox.Item id="City">
                              City
                            </ListBox.Item>

                            <ListBox.Item id="Adventure">
                              Adventure
                            </ListBox.Item>

                            <ListBox.Item id="Luxury">
                              Luxury
                            </ListBox.Item>

                          </ListBox>
                        </Select.Popover>

                      </Select>
                    </div>

                    {/* Price */}
                    <TextField
                    defaultValue={result.price}
                      name="price"
                      type="number"
                      isRequired
                    >
                      <Label>Price</Label>

                      <Input
                        type="number"
                        placeholder="1200"
                        className="rounded-2xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField
                    defaultValue={result.duration}
                      name="duration"
                      isRequired
                    >
                      <Label>Duration</Label>

                      <Input
                        placeholder="7 Days"
                        className="rounded-2xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                      <TextField
                      defaultValue={result.departureDate}
                        name="departureDate"
                        type="date"
                        isRequired
                      >
                        <Label>Departure Date</Label>

                        <Input
                          type="date"
                          className="rounded-2xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                      <TextField
                      defaultValue={result.imageUrl}
                        name="imageUrl"
                        isRequired
                      >
                        <Label>Image URL</Label>

                        <Input
                          type="url"
                          placeholder="https://example.com/image.jpg"
                          className="rounded-2xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={result.description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>

                        <TextArea
                          placeholder="Write destination details..."
                          className="rounded-3xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-cyan-500 text-white rounded-2xl"
                  >
                    Update Destination
                  </Button>

                </form>

              </Surface>

            </Modal.Body>

            {/* Footer */}
            <Modal.Footer>

              <Button
                slot="close"
                variant="secondary"
                className="rounded-xl"
              >
                Cancel
              </Button>

              <Button
                slot="close"
                className="rounded-xl bg-black text-white"
              >
                Save Changes
              </Button>

            </Modal.Footer>

          </Modal.Dialog>

        </Modal.Container>
      </Modal.Backdrop>

    </Modal>
  );
}