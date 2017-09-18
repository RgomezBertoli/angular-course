export default function($localStorage){
    return {
        request,
        response
    };
    
    function request(req){
        const token = $localStorage.get('token');
        if(token){
            req.headers.Authorization = `Bearer ${token}`;
        }

        return req;
    }

    function response(res){
        if(res.headers.Authorization){
            const auth = res.headers.Authorization.split(' ');
            $localStorage.set('token', auth[1]);
        }

        return res;
    }
} 