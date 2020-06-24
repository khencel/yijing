<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Hexagram;
use App\User;
use App\DailyHex;

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
        return Hexagram::find($id);
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

        Hexagram::find($id)->update($hex);
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

        $attribute = $this->randomAttr($x,$attr);

        return response()->json([
            'hexagram' => $hex,
            'attribute' => $attribute
        ]);
    }


    public function randomAttr($x, $attr){
        $attribute_label = "";
        $value = "";
        switch ($x) {
            case 1:
                $attribute_label = "Business";
                $value = $attr['business'];
                break;
            case 2:
                $attribute_label = "Opening";
                $value = $attr['business'];
                break;
            case 3:
                $attribute_label = "Nobleman";
                $value = $attr['business'];
                break;
            case 4:
                $attribute_label = "Weather";
                $value = $attr['business'];
                break;
            case 5:
                $attribute_label = "General";
                $value = $attr['business'];
                break;
            case 6:
                $attribute_label = "Wealth";
                $value = $attr['business'];
                break;

            case 7:
                $attribute_label = "Relationship";
                $value = $attr['business'];
                break;

            case 8:
                $attribute_label = "Family";
                $value = $attr['business'];
                break;

            case 9:
                $attribute_label = "Legal";
                $value = $attr['business'];
                break;

            case 10:
                $attribute_label = "Travel";
                $value = $attr['business'];
                break;

            case 11:
                $attribute_label = "Health";
                $value = $attr['business'];
                break;

            case 12:
                $attribute_label = "Property";
                $value = $attr['business'];
                break;
        }

        return response()->json([
            'label' => $attribute_label,
            'value' => $value
        ]);
    }


}
