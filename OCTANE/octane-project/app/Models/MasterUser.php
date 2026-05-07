<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Tymon\JWTAuth\Contracts\JWTSubject;

class MasterUser extends Model implements AuthenticatableContract, AuthorizableContract, JWTSubject
{
    //
    use Authenticatable, Authorizable, HasFactory;
    protected $table="user_master";
    protected $primaryKey="userId";
    public $timestamps = false;
    protected $fillable = [
        'name','gender', 'mobile','address','userImage','emailId', 'userLoginId', 'userPassword', 'priviledge', 'updatedOn', 'createdBy', 'updatedBy','deleteFlag'
    ];
    protected $hidden = [
        'userPassword',
    ];
    public function getJWTIdentifier()
    {
        return $this->userId;
    }
    public function getJWTCustomClaims()
    {
        return [];
    }
    public function getAuthPassword()
    {
        return $this->userPassword; //change the field you want 
    }
    
    public function getAuthIdentifierName()
    {
        return 'userId';
    }
}
