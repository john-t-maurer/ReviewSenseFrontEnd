/**
 * An HTML directive that passes initialization information to list components.
 * 
 * @interface
 */
export interface Options {
    /**A string that titles the list. */
    header: string;

    /**A string that limits the number of search results. The list populates movies containing the value in query. */
    query: string;

    /**Instructs the list on which URL it is on, and consequently which service to subscribe to. */
    location: string;

    /**Instructs the list on the page type it is on. */
    page?: string;
}
