<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Hexagram;
use App\User;
use App\DailyHex;
use App\Nobleman;
use App\Opening;
use App\Weather;
use App\Luck;
use App\Wealth;
use App\Relationship;
use App\Business;
use App\Family;
use App\Legal;
use App\Travel;
use App\Health;
use App\Property;

class HexagramController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Hexagram::latest()->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Hexagram::with('nobleman','opening','weather','luck','wealth','relationship','business','family','legal','travel','health','properties')->find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        

        $hex = request()->validate([
            'name' => 'required',
            'meaning' => 'required',
            'opening' => 'required',
            'nobleman' => 'required',
            'weather' => 'required',
            'general' => 'required',
            'wealth' => 'required',
            'relationship' => 'required',
            'business' => 'required',
            'family' => 'required',
            'legal' => 'required',
            'travel' => 'required',
            'health' => 'required',
            'property' => 'required',
        ]);


        if(request()->photo == null){
            $name = "";
        }else{
            $photo = Hexagram::find($id);

            $existingPhoto = public_path('/storage/img/').$photo->photo;
            if(File_exists($existingPhoto)){
                @unlink($existingPhoto);
            }

            $name = time().'.' . explode('/', explode(':', substr($request->photo, 0, strpos($request->photo, ';')))[1])[1]; 
            \Image::make($request->photo)->save(public_path('/storage/img/').$name);
        }

        

        Hexagram::find($id)->update([
            'meaning' => request()->meaning,
            'photo' => $name
        ]);

        Nobleman::where('hexagram_id',$id)->update([
            'description' => request()->nobleman,
            'rating' => request()->nobleman_rating,
        ]);

        Opening::where('hexagram_id',$id)->update([
            'description' => request()->opening,
            'rating' => request()->opening_rating,
        ]);

        Weather::where('hexagram_id',$id)->update([
            'description' => request()->weather,
            'rating' => request()->weather_rating,
        ]);

        Luck::where('hexagram_id',$id)->update([
            'description' => request()->general,
            'rating' => request()->general_rating,
        ]);

        Wealth::where('hexagram_id',$id)->update([
            'description' => request()->wealth,
            'rating' => request()->wealth_rating,
        ]);

        Relationship::where('hexagram_id',$id)->update([
            'description' => request()->relationship,
            'rating' => request()->relationship_rating,
        ]);

        Business::where('hexagram_id',$id)->update([
            'description' => request()->business,
            'rating' => request()->business_rating,
        ]);

        Family::where('hexagram_id',$id)->update([
            'description' => request()->family,
            'rating' => request()->family_rating,
        ]);

        Legal::where('hexagram_id',$id)->update([
            'description' => request()->legal,
            'rating' => request()->legal_rating,
        ]);

        Travel::where('hexagram_id',$id)->update([
            'description' => request()->travel,
            'rating' => request()->travel_rating,
        ]);

        Health::where('hexagram_id',$id)->update([
            'description' => request()->health,
            'rating' => request()->health_rating,
        ]);

        Property::where('hexagram_id',$id)->update([
            'description' => request()->property,
            'rating' => request()->property_rating,
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function castHex(){
        $hex = Hexagram::all()->random(1);
        $user = \Auth::user()->is_subscriber;

        return response()->json([
            'hexagram' => $hex, 
            'user' => $user,
            ]);
    }

    public function subscribe(){
        return \Auth::user()->id;
    }

    public function transformName(){
        $name = Hexagram::where('code',implode(request()->transformName))->first();
        return $name;
    }

    public function dailyHex(){
        
        $hex = DailyHex::where('id',request()->date)->with('hexagram')->first();
        $attr = $hex->hexagram;

        $x = rand(1,12);


        return response()->json([
            'hexagram' => $hex,
        ]);
    }

}
