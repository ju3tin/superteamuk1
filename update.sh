#!/bin/bash
 
# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "Git is not installed. Please install Git first."
    exit 1
fi

# Prompt for commit message
read -p "Enter the commit message: " commit_message

# Check if the current directory is a git repository
if [ ! -d .git ]; then
    echo "This directory is not a Git repository. Please navigate to a Git repository and try again."
    exit 1
fi

# Stage all changes
echo "Staging all changes..."
git add .

# Commit changes with the provided message
echo "Committing changes..."
git commit -m "$commit_message"

# Push changes to the remote repository
echo "Pushing changes to the remote repository..."
git push all main

echo "Update complete!"

#  chmod +x update_github.sh


#  ./update.sh


