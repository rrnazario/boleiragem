
interface PlayerProps {
    title: string;
    source: string;
    type?: string
}

export default function Player({ title, source, type }: PlayerProps) {
    return <>
            <p className="fixed left-0 top-0 flex-col w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            {title}
            <audio controls>
                <source src={source} type={type ?? "audio/ogg"} />
                Your browser does not support the audio element.
            </audio>
            </p>
        </>
}