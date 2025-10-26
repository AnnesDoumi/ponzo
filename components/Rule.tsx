export function Rule({ strong = false }: { strong?: boolean }) {
    return <div className={strong ? "rule" : "hairline"} aria-hidden="true" />
}
