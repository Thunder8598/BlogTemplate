class Fetch {

    private static debug: boolean = false;

    private static getHeaders = (): Headers => {

        const csrf = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");

        if (!csrf)
            throw "X-CSRF-TOKEN vazio";

        return new Headers({
            "X-CSRF-TOKEN": csrf,
            "X-Requested-With": "XMLHttpRequest"
        });
    }

    public static post = async<I>(url: string, data: FormData): Promise<I> => {
        const response = await fetch(url, {
            headers: Fetch.getHeaders(),
            method: "POST",
            body: data
        });

        return Fetch.responseHandle<I>(response);
    }

    public static get = async <I>(url: string): Promise<I> => {
        const response = await fetch(url, { headers: Fetch.getHeaders() });

        return Fetch.responseHandle<I>(response);
    }

    private static responseHandle = async<I>(response: Response): Promise<I> => {
        try {

            if (response.status > 299)
                throw response;

            const json = await response.json();

            if (Fetch.debug)
                console.debug(response);

            return (typeof (json) == "string" && json.length ? JSON.parse(json) : json);
        } catch (error) {
            throw response;
        }
    }
}

export default Fetch;