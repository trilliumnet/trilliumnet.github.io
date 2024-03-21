#!/usr/local/bin/perl -w

use CGI;
use LWP::Simple;

my $q = CGI->new;
my $s = $q->param('q');
print $q->header;

#print $q->start_html('Case Sensitive Search');
#print $q->h1('Results');


my $qstring = "http://www.google.com/search";
print "getting " . $qstring;
print("<hr>");
my $content = get($qstring) or die 'Unable to get page';
print $content;


$q->end_html;
exit 0;
