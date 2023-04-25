import React, { useState } from "react";
import { TextField, Grid, Typography, ToggleButtonGroup, ToggleButton, Box, Paper } from "@mui/material";

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
        <Grid container direction="column" alignItems="center" justifyContent="center" rowSpacing={5}>
            <Grid item>
                <Box width="100%">
                    <Typography variant="h1" align="center">
                        URL Encode Decode Tool
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Welcome to our URL Encode Decode web service, the fast and easy solution for encoding and decoding URLs online.
                        <br />
                        Our tool is designed to make working with URLs easier and more efficient than ever before.
                    </Typography>
                </Box>
            </Grid>
            <Grid container item direction="column" rowSpacing={4} sx={{ mt: 10, mb: 10 }}>
                <Grid container item>
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
                <Grid item>
                    <Box display="flex" justifyContent="center" alignItems="center">
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
                    </Box>
                </Grid>
            </Grid>
            <Grid item>
                <Box>
                    <Typography variant="h4" component="h2" sx={{ fontWeight: "light" }}>
                        What is URL Encoding
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: "light" }}>
                        URL encoding is a process of converting a URL or other text strings into a format that can be safely transmitted over the internet. This
                        is important because some characters, such as spaces or special characters, cannot be used directly in a URL without causing problems.
                        For example, if you include a space in a URL, it will be interpreted as a different character and may result in an error or broken link.
                        To solve this problem, URL encoding is used to convert special characters and spaces into a format that can be safely transmitted over
                        the internet. This involves converting each special character into a percent sign (%) followed by its ASCII code. For example, the space
                        character is converted to %20, while the plus sign (+) is converted to %2B.
                    </Typography>
                </Box>
            </Grid>
            <Grid item>
                <Box>
                    <Typography variant="h4" component="h2" sx={{ fontWeight: "light" }}>
                        Why we need URL Encoding
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: "light" }}>
                        URL encoding is necessary for a variety of reasons, including: Compatibility: Different web browsers and servers may interpret special
                        characters differently. URL encoding ensures that the URL will be interpreted consistently across different platforms. Security: URL
                        encoding helps to prevent security vulnerabilities such as SQL injection attacks or cross-site scripting (XSS) attacks. Search engine
                        optimization: URLs that are properly encoded can help to improve search engine rankings by providing relevant information about the
                        content of the page. By providing users with a clear explanation of what URL encoding is and why it is important, you can help them
                        better understand how your URL Encode Decode web service can benefit them.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default UrlEncoderDecoder;
