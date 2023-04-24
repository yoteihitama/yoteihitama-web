import React, { useState } from "react";
import { TextField, Grid, Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";

const EncodeMode = {
    ENCODE: {
        reverseMode: () => EncodeMode.DECODE,
        toString: () => "ENCODE",
        inputHelperText: "Input the text that you want to encode",
        outputHelperText: "Encoded text",
    },
    DECODE: {
        reverseMode: () => EncodeMode.ENCODE,
        toString: () => "DECODE",
        inputHelperText: "Input the text that you want to decode",
        outputHelperText: "Decoded text",
    },
};

function encodeOrDecode(input, mode) {
    if (mode === EncodeMode.ENCODE) {
        return encodeURIComponent(input);
    }
    if (mode === EncodeMode.DECODE) {
        return decodeURIComponent(input);
    }
    return null;
}

function UrlEncoderDecoder() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [mode, setMode] = useState(EncodeMode.ENCODE);

    const switchInOut = () => {
        const tempInput = input;
        setInput(output);
        setOutput(tempInput);
    };

    return (
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={3}>
            <Grid item>
                <Typography variant="h3" align="center">
                    URL Encoder/Decoder
                </Typography>
            </Grid>
            <Grid container item alignItems="center" spacing={3}>
                <Grid item xs={6}>
                    <TextField
                        label="Input"
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                            setOutput(encodeOrDecode(e.target.value, mode));
                        }}
                        helperText={mode.inputHelperText}
                        fullWidth
                        multiline
                        autoFocus
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Output"
                        value={output}
                        onChange={(e) => {
                            setOutput(e.target.value);
                            setInput(encodeOrDecode(e.target.value, mode.reverseMode()));
                        }}
                        helperText={mode.outputHelperText}
                        fullWidth
                        multiline
                    />
                </Grid>
            </Grid>
            <Grid item spacing={1}>
                <ToggleButtonGroup
                    color="primary"
                    value={mode.toString()}
                    exclusive
                    onChange={(e) => {
                        const encodeMode = EncodeMode[e.target.value];
                        if (mode === encodeMode) {
                            return;
                        }
                        setMode(encodeMode);
                        switchInOut();
                    }}
                >
                    <ToggleButton value={EncodeMode.ENCODE.toString()}>Encode</ToggleButton>
                    <ToggleButton value={EncodeMode.DECODE.toString()}>Decode</ToggleButton>
                </ToggleButtonGroup>
            </Grid>
        </Grid>
    );
}

export default UrlEncoderDecoder;
