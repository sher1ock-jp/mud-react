import { useState } from "react";
import { FormButton, FormField, FormFieldWrapper } from "./theme";
import { Plus } from "./theme/Plus";

export function ToDoForm() {
  const {
    systemCalls: {
      addToDo(newToDo);
    },
  } = useMUD();


  const [newToDo, setNewToDo] = useState("");

  return (
    <FormFieldWrapper>
      <FormField type="text" placeholder="new todo" value={newToDo} onChange={(e) => {
        setNewToDo(e.target.value);
      }} />
      <FormButton onClick={() => {

      }}>
        <Plus />
      </FormButton>
    </FormFieldWrapper>
  )
}