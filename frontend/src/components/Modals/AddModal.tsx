import React, { ChangeEvent, useState } from "react";
import Modal from 'react-modal';
import { TextField } from "../TextField";
import { Button } from "../Button";

export type AddModalProps = {
    show?: boolean;
    onClose?: () => void;
    onSubmit: (field: string) => void;
}

const styles = {
    content: {
        width: '400px',
        margin: 'auto',
        height: '100px'
    }
}
export function AddModal({ show = false, onSubmit, onClose}: AddModalProps) {
    const [field, setField] = useState<string>();

    return (
        <Modal style={styles} isOpen={show} onRequestClose={onClose}>
            <TextField className='w-[80%] mr-2'placeholder="add input" onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                setField(ev.target.value)
              }
              required/>
              <Button onClick={() => onSubmit(field!)} disabled={!field}>Add</Button>
        </Modal>
    )
}