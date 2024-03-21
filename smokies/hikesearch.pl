#!/usr/bin/perl

#
# Hike Search
#

use CGI::Carp qw(fatalsToBrowser set_message);  # use when debugging
use CGI qw(param);
use URI::Escape;
use LWP;
use LWP::Simple;
use XML::LibXML;
use XML::LibXML::Reader;
use XML::Parser;
use XML::Simple;
use Data::Dumper;
use DateTime qw();
use POSIX qw(strftime);

use strict;                     # Good practice
use warnings;                   # Good practice

#
# get form parameters
#
my $diff_all = param( "diff_all" );
my $veasy = param( "veasy" );
my $easy = param( "easy" );
my $moderate = param( "moderate" );
my $strenuous = param( "strenuous" );
my $waterfall = param( "waterfall" );
my $views = param( "views" );
my $swildflowers = param( "swildflowers" );
my $junefa = param( "junefa" );
my $creek = param( "creek" );
my $bridges = param( "bridges" );
my $paved = param( "paved" );
my $kid = param( "kid" );
my $bikes = param( "bikes" );
my $dogs = param( "dogs" );
my $horses = param( "horses" );
my $oldgrowth = param( "oldgrowth" );
my $tower = param( "tower" );
my $loop = param( "loop" );
my $sgnt = param( "sgnt" );
my $length_any = param( "length_any" );
my $less_than_one = param( "less_than_one" );
my $one_to_five = param( "one_to_five" );
my $five_to_ten = param( "five_to_ten" );
my $more_than_five = param( "more_than_five" );
my $length = param( "length" );
my $within = param( "within" );
my $of = param( "of" );

#
# output HTTP header
#
print("Content-Type: text/html;\n");
print("\n");

    print strftime('%m/%d/%Y %H:%M:%S', localtime(time)) . 
                     " " . $ENV{REMOTE_ADDR} .
                     " ------------" . "<br>\n";

print $ENV{'QUERY_STRING'} . "<br>\n";
print"<hr>\n";

if ($diff_all) {
    print("diff_all<br>\n");
}
if ($veasy) {
    print("veasy<br>\n");
}
if ($easy) {
    print("easy<br>\n");
}
if ($moderate) {
    print("moderate<br>\n");
}
if ($strenuous) {
    print("strenuous<br>\n");
}
if ($waterfall) {
    print("waterfall<br>\n");
}
if ($views) {
    print("views<br>\n");
}
if ($swildflowers) {
    print("swildflowers<br>\n");
}
if ($junefa) {
    print("junefa<br>\n");
}
if ($creek) {
    print("creek<br>\n");
}
if ($bridges) {
    print("bridges<br>\n");
}
if ($paved) {
    print("paved<br>\n");
}
if ($kid) {
    print("kid<br>\n");
}
if ($bikes) {
    print("bikes<br>\n");
}
if ($dogs) {
    print("dogs<br>\n");
}
if ($horses) {
    print("horses<br>\n");
}
if ($oldgrowth) {
    print("oldgrowth<br>\n");
}
if ($tower) {
    print("tower<br>\n");
}
if ($loop) {
    print("loop<br>\n");
}
if ($sgnt) {
    print("sgnt<br>\n");
}
if ($length_any) {
    print("length_any<br>\n");
}
if ($less_than_one) {
    print("less_than_one<br>\n");
}
if ($one_to_five) {
    print("one_to_five<br>\n");
}
if ($five_to_ten) {
    print("five_to_ten<br>\n");
}
if ($more_than_five) {
    print("more_than_5<br>\n");
}
if ($length) {
    print("length = ". $length . "<br>\n");
}
if ($within) {
    print("within = ". $within . "<br>\n");
}
if ($of) {
    print("of = ". $of . "<br>\n");
}

