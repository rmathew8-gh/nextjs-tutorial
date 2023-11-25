import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts.ts';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className}  text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            [root]: {children}
        </body>
        </html>
    );
}
