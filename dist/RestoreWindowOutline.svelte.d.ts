import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
        role?: string | undefined;
        color?: string | undefined;
        strokeWidth?: string | undefined;
        withEvents?: boolean | undefined;
        onclick?: ((event: MouseEvent) => void) | undefined;
        onkeydown?: ((event: KeyboardEvent) => void) | undefined;
        onkeyup?: ((event: KeyboardEvent) => void) | undefined;
        class?: string | undefined;
    } & {
        title?: {
            id?: string | undefined;
            title?: string | undefined;
        } | undefined;
        desc?: {
            id?: string | undefined;
            desc?: string | undefined;
        } | undefined;
        ariaLabel?: string | undefined;
        size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RestoreWindowOutlineProps = typeof __propDef.props;
export type RestoreWindowOutlineEvents = typeof __propDef.events;
export type RestoreWindowOutlineSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props:
 */
export default class RestoreWindowOutline extends SvelteComponent<RestoreWindowOutlineProps, RestoreWindowOutlineEvents, RestoreWindowOutlineSlots> {
}
export {};
