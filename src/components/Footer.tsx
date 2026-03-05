const Footer = () => {
    return (
        <footer className="text-center py-4 border-t mt-8">
            <p>Questions? Comments? Feel free to reach out to me at bobbyrune94@gmail.com or on social media.</p>
            <div className="text-sm text-gray-500 mt-2">
                <p >
                    Made using React, Tailwind CSS, and Vite. Deployed in GitHub Pages via GitHub Workflows
                </p>
                <p>&copy; {new Date().getFullYear()} Kenny/Kungfu_Kenny98/bobbyrune94. All rights reserved.</p>

            </div>
        </footer>
    )
}

export default Footer;