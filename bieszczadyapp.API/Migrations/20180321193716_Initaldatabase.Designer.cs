﻿// <auto-generated />
using bieszczadyapp.API.Data;
using bieszczadyapp.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace bieszczadyapp.API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20180321193716_Initaldatabase")]
    partial class Initaldatabase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125");

            modelBuilder.Entity("bieszczadyapp.API.Models.Reservation", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("EndTime");

                    b.Property<int>("RoomId");

                    b.Property<DateTime>("StartTime");

                    b.Property<int>("UserId");

                    b.Property<int>("charge");

                    b.HasKey("id");

                    b.ToTable("Reservation");
                });

            modelBuilder.Entity("bieszczadyapp.API.Models.Room", b =>
                {
                    b.Property<int>("RoomId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("ImgUrl");

                    b.Property<bool>("Internet");

                    b.Property<bool>("IsEmpty");

                    b.Property<string>("Name");

                    b.Property<int>("PeronAmount");

                    b.Property<decimal>("Price");

                    b.Property<int>("Type");

                    b.Property<bool>("bathroom");

                    b.Property<bool>("tv");

                    b.HasKey("RoomId");

                    b.ToTable("Rooms");
                });

            modelBuilder.Entity("bieszczadyapp.API.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd();

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Role");

                    b.Property<string>("Surname");

                    b.Property<string>("Username");

                    b.Property<string>("email");

                    b.Property<string>("name");

                    b.Property<string>("phoneNumber");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
