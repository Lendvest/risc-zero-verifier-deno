# AAVE Stats WASM Package

This package provides WebAssembly bindings for RISC0 receipt verification in the AAVE Stats project.

## Prerequisites

1. **Rust** - Install from [rustup.rs](https://rustup.rs/)
2. **wasm-pack** - Install with:
   ```bash
   cargo install wasm-pack
   ```

## Building

### For Node.js (recommended)
```bash
# On Windows
build.bat

# On Unix/Linux/macOS
chmod +x build.sh
./build.sh
```

### Manual build commands
```bash
# Build for Node.js
wasm-pack build --target nodejs --out-dir pkg --release

# Build for web browsers
wasm-pack build --target web --out-dir pkg-web --release

# Build for bundlers (webpack, etc.)
wasm-pack build --target bundler --out-dir pkg-bundler --release
```

## Usage in Node.js

After building, you can use the package in Node.js:

```javascript
const wasm = require('./pkg/aave_stats_wasm');

// Get RISC0 version
const version = wasm.get_risc0_version();
console.log('RISC0 Version:', version);

// Convert binary receipt to JSON
const receiptJson = wasm.binary_to_json(receiptBinary);
console.log('Receipt JSON:', receiptJson);

// Verify receipt
const result = wasm.verify_receipt_json(guestCodeId, receiptJson);
console.log('Verification result:', result);
```

## Troubleshooting

### WebAssembly.Table.grow() Error

If you encounter `WebAssembly.Table.grow(): failed to grow table by 4` error, try these solutions:

1. **Increase Node.js memory limit:**
   ```bash
   node --max-old-space-size=4096 your-script.js
   ```

2. **Rebuild the WASM package:**
   ```bash
   cd wasm
   rm -rf pkg
   wasm-pack build --target nodejs --out-dir pkg --release
   ```

3. **Use the provided example script:**
   ```bash
   node --max-old-space-size=4096 example.js
   ```

4. **Check Node.js version:** Ensure you're using Node.js 16+ for better WASM support

### Memory Issues

- The WASM module is configured with `panic = "abort"` to reduce memory overhead
- Size optimizations are enabled with `opt-level = "s"`
- If you still have issues, try running with more memory: `--max-old-space-size=8192`

## Available Functions

- `get_risc0_version()` - Get the RISC0 version
- `binary_to_json(receipt: Uint8Array)` - Convert binary receipt to JSON
- `verify_receipt_json(guestCodeId: string, receiptJson: string)` - Verify receipt from JSON
- `verify_receipt_binary(guestCodeId: string, receiptBinary: Uint8Array)` - Verify receipt from binary

## Output Directories

- `pkg/` - Node.js compatible package
- `pkg-web/` - Web browser compatible package  
- `pkg-bundler/` - Bundler compatible package

## Notes

- The package is optimized for size in release builds
- Console logging is available for debugging
- Error handling is implemented with proper JavaScript error objects
- Memory management is optimized for Node.js environments 