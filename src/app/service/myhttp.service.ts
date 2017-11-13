import {Injectable} from "@angular/core";
import { Http, RequestOptions, RequestOptionsArgs, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";

declare let IMP: any;
declare let PORTAL: any;

@Injectable()
export class MyhttpService {

    // constructor(private http: Http) {
    // }

    // private getHeaders(): Headers {
    //     const headers =  new Headers({
    //         'Content-Type': 'application/json'
    //         // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:max-line-length
    //       //  'Authorization': 'Bearer 26a432cb0c1c96a5f86a8a338efd76ee4de4ba954df7b6a3498221cbcd6fe74a' // todo:need to uncomment after functionality complete
    //     });
    //     // if (PORTAL.isDebugBuild)
    //     // // tslint:disable-next-line:one-line
    //     // {
    //     //     headers.delete('Authorization');
    //     // }
    //     return headers;
    // }

    // private getOptions(options?: RequestOptionsArgs) {
    //     const opt = new RequestOptions({'headers': this.getHeaders()} );
    //     console.log(opt);
    //     opt.merge(options);
    //     return opt;
    // }


    // get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    //     return this.http.get(url, this.getOptions(options));
    // }

    // post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    //     return this.http.post(url, body, this.getOptions(options));
    // }

    constructor(private http: Http) {
    }

    private getHeaders(): Headers {
        const headers =  new Headers({
            'Content-Type': 'application/json'
        });
        return headers;
    }

    private getOptions(options?: RequestOptionsArgs) {
        const opt = new RequestOptions({'headers': <any>this.getHeaders()} );
        opt.merge(options);
        return opt;
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.get(url, this.getOptions(options));
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.post(url, body, options);
    }


}


