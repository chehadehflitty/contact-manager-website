<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
class ContactController extends Controller
{
    function getAll(){
        $contacts=Contact::all();
        return response()->json($contacts);
    }

    function store(Request $request){
        $validateData=$request->validate([
            'name' => 'required|max:255',
            'phone_number' => 'required|max:20',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);
        $contact=Contact::create($validateData);
        return response()->json($contact);
    }

    function show($id){
        $contact=Contact::findOrFail($id);
        return response()->json($contact);
    }

    function update(Request $request,$id){
        $dataToUpdate = $request->validate([
            'name' => 'required|max:255',
            'phone_number' => 'required|max:20',
            'latitude' => 'required',
            'longitude' => 'required',
        ]);

        $contact=Contact::findOrFail($id);
        $contact->update($dataToUpdate);
        return response()->json($contact);
    }

    function delete($id){
        $contact=Contact::findOrFail($id);
        $contact->delete();
        return response()->json(['message'=>'succefully deleted']);
    }
}
