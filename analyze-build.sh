#!/bin/bash

echo "🔍 Analyzing production build files..."
echo "====================================="

# Check if build exists
if [ ! -d ".next" ]; then
    echo "❌ Build directory not found. Please run 'npm run build' first."
    exit 1
fi

echo "📦 Static Files Analysis:"
echo "------------------------"

# List all static files with sizes
find .next/static -type f \( -name "*.js" -o -name "*.css" \) -exec ls -lh {} \; | awk '{print $5, $9}'

echo ""
echo "📊 File Summary:"
echo "---------------"

# Count JS and CSS files
js_count=$(find .next/static -name "*.js" | wc -l)
css_count=$(find .next/static -name "*.css" | wc -l)

echo "JavaScript files: $js_count"
echo "CSS files: $css_count"

# Calculate total sizes
js_size=$(find .next/static -name "*.js" -exec du -k {} + | awk '{sum+=$1} END {print sum "KB"}')
css_size=$(find .next/static -name "*.css" -exec du -k {} + | awk '{sum+=$1} END {print sum "KB"}')

echo "JavaScript total size: $js_size"
echo "CSS total size: $css_size"

echo ""
echo "🗂️ Chunk Analysis:"
echo "------------------"

# Show largest chunks
echo "Largest JavaScript files:"
find .next/static -name "*.js" -exec du -h {} + | sort -hr | head -5

echo ""
echo "Largest CSS files:"
find .next/static -name "*.css" -exec du -h {} + | sort -hr | head -5

echo ""
echo "✅ Build analysis complete!"