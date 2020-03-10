# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|email|string|null: false, unique: true|
|password|string|null: false, unique: true|

### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
- has_many :messages

## groupsテーブル

|column|Type|Options|
|------|----|-------|
|name|string|null: false unique: true|

### Association
- has_many :users, thorugh: :groups_users
- has_many :groups_users
- has_many :messages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, froeign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|string||
|image|string||
|user|references|null: false, foreign_key: true|
|group|references|null: false, froeign_key: true|


### Association
- belongs_to :user
- belongs_to :group